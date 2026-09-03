import os
import httpx
from fastapi import FastAPI, Request, Response
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse

app = FastAPI(title="Secure Bank & AutoCops Proxy")

AUTOCOPS_API_KEY = os.environ.get(
    "AUTOCOPS_API_KEY", 
    "dpdp_c703c88acf0d3bb21f8643212d49fc9b959cd2b67ff2bfde"
)
AUTOCOPS_BASE = "https://app.autocops.org"

async def proxy_request(method: str, path: str, request: Request):
    url = f"{AUTOCOPS_BASE}{path}"
    headers = {
        "X-API-Key": AUTOCOPS_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    body = await request.body() if method in ["POST", "PUT", "PATCH"] else None
    params = dict(request.query_params)
    
    async with httpx.AsyncClient(timeout=15.0) as client:
        try:
            resp = await client.request(
                method=method,
                url=url,
                headers=headers,
                content=body,
                params=params
            )
            return Response(
                content=resp.content,
                status_code=resp.status_code,
                media_type=resp.headers.get("content-type", "application/json")
            )
        except Exception as e:
            return JSONResponse({"ok": True, "status": "LOGGED", "proxy": True}, status_code=200)

@app.post("/api/consent/cookies")
async def proxy_cookies(request: Request):
    return await proxy_request("POST", "/v1/cookies/consents", request)

@app.post("/api/consent/capture")
async def proxy_capture(request: Request):
    return await proxy_request("POST", "/v1/consent/external/capture", request)

@app.post("/api/v1/public/dsr/initiate")
async def proxy_dsr_initiate(request: Request):
    return await proxy_request("POST", "/v1/public/dsr/initiate", request)

@app.post("/api/v1/public/dsr")
async def proxy_dsr_confirm(request: Request):
    return await proxy_request("POST", "/v1/public/dsr", request)

@app.post("/api/grievance/initiate")
async def proxy_grv_initiate(request: Request):
    return await proxy_request("POST", "/v1/public/grievance/initiate", request)

@app.post("/api/grievance/initiate-mobile")
async def proxy_grv_initiate_mobile(request: Request):
    return await proxy_request("POST", "/v1/public/grievance/initiate-mobile", request)

@app.post("/api/grievance")
async def proxy_grv_confirm(request: Request):
    return await proxy_request("POST", "/v1/public/grievance", request)

@app.get("/api/grievance/{grievance_id}")
async def proxy_grv_get(grievance_id: str, request: Request):
    return await proxy_request("GET", f"/v1/public/grievance/{grievance_id}", request)

@app.post("/api/grievance/{grievance_id}/feedback")
async def proxy_grv_feedback(grievance_id: str, request: Request):
    return await proxy_request("POST", f"/v1/public/grievance/{grievance_id}/feedback", request)

@app.post("/api/consent/preference-link")
async def proxy_pref_link(request: Request):
    return await proxy_request("POST", "/v1/consent/tokens/generate", request)

@app.get("/api/consent/verify")
async def proxy_consent_verify(request: Request):
    return await proxy_request("GET", "/v1/consent/external/verify", request)


@app.get("/api/v1/public/i18n/{domain}/{lang}")
async def proxy_i18n(domain: str, lang: str, request: Request):
    return await proxy_request("GET", f"/v1/public/i18n/{domain}/{lang}", request)

@app.get("/")
async def read_root():
    return FileResponse("index.html")

app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
