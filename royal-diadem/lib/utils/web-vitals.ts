import type { Metric } from "web-vitals";

/**
 * Report Web Vitals metrics.
 * In production, send these to your analytics endpoint.
 */
export function reportWebVitals(metric: Metric) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`[Web Vital] ${metric.name}:`, Math.round(metric.value), metric.rating);
  }

  // In production, send to analytics:
  // const body = JSON.stringify({
  //   name: metric.name,
  //   value: metric.value,
  //   rating: metric.rating,
  //   id: metric.id,
  //   navigationType: metric.navigationType,
  // });
  // navigator.sendBeacon("/api/analytics", body);
}
