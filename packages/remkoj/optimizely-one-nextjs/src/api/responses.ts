import type { ApiServiceErrorResponse } from "./types"

export const NotFound : ApiServiceErrorResponse = [{ error: { status: 404, message: "Not found" }}, 404]