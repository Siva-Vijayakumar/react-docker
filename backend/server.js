const express = require("express")
const axios = require("axios")
const cors = require("cors")
const client = require("prom-client")

const app = express()
app.use(cors())

const PORT = 5000

// Prometheus metrics
const register = new client.Registry()
client.collectDefaultMetrics({ register })

// custom metrics
const requestCounter = new client.Counter({
  name: "api_requests_total",
  help: "Total API Requests",
  labelNames: ["method", "route"]
})

const apiLatency = new client.Histogram({
  name: "api_latency_ms",
  help: "API latency",
  buckets: [50, 100, 200, 500, 1000]
})

register.registerMetric(requestCounter)
register.registerMetric(apiLatency)

const logs = []

// middleware to log requests
app.use((req, res, next) => {

  const end = apiLatency.startTimer()

  requestCounter.labels(req.method, req.path).inc()

  const log = {
    time: new Date(),
    method: req.method,
    route: req.path
  }

  logs.push(log)

  res.on("finish", () => {
    end()
  })

  next()
})


// sports endpoint
app.get("/sports", async (req, res) => {

  try {

    const response = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4328"
    )

    res.json(response.data.events)

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sports data" })
  }

})


// metrics endpoint
app.get("/metrics", async (req, res) => {

  res.set("Content-Type", register.contentType)

  const metrics = await register.metrics()

  res.send(metrics)

})


// logs endpoint
app.get("/logs", (req, res) => {
  res.json(logs)
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})