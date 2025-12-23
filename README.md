# Azure App Services - Response Time Scaling Test

This repository is a small Laravel application used to test scaling and behavior on Azure App Services. It intentionally includes a simple delayed response flow that queries the database with an artificial delay to simulate slow backend responses. The project also contains database seeders and factories to assist with DB / SQL testing and connection verification.

## Key Features

- Delayed DB response endpoint (used to simulate slow queries and observe scaling behavior).
- Database seeders and factories for generating test data (`database/seeders`, `database/factories`).
- Docker and `docker-compose` support for easy local runs.

## Local development

1. Copy example env and install: 

```bash
cp .env.example .env
composer install
```

2. Configure your database settings in `.env` (MySQL is recommended for parity with production).

3. Using Docker (recommended):

```bash
docker-compose up -d
```

4. Run migrations and seed the DB:

```bash
php artisan migrate --seed
```

5. Start the app (if not using Docker):

```bash
php artisan serve --host=0.0.0.0 --port=8000
```

6. Hit the delay test endpoint (example):

```bash
curl http://localhost:8000/api/delayed
```

Note: controller/routes for the delayed response live in `app/Http/Controllers` and `routes/api.php` — adjust the path above if your routes differ.

## Seeders

The repository includes seeders to populate test data for SQL/DB tests. To run them explicitly:

```bash
php artisan db:seed
php artisan db:seed --class=SpecificSeederName
```

See `database/seeders` for available seeders and `database/factories` for model factories.

## Azure App Services notes

- This project includes a `Dockerfile` and `docker-compose.yml` to enable container-based deployment to Azure App Service for Containers.
- When deploying, set environment variables in the App Service configuration (DATABASE_URL / DB_HOST / DB_DATABASE / DB_USERNAME / DB_PASSWORD, `APP_KEY`, etc.).
- Use Application Insights or an equivalent APM to observe response times; scale-out App Service plan based on observed backend latency to validate autoscaling behavior.
- For heavy load testing, ramp connections gradually (e.g. with `wrk`, `k6`, or Azure Load Testing) and monitor both response time and instance counts.

## Quick debugging tips

- If you see DB connection errors, verify `.env` values and that the DB container (or external DB) is reachable.
- To reproduce slow database behavior locally, check for the controller that introduces an artificial delay or look for `sleep()` / `DB::raw('SLEEP(...)')` usages.

## Contact / purpose

This project was created to collaborate with customers on Azure App Services to validate scaling strategies based on response time. If you'd like, I can add example load test scripts or a small guide to deploy this to an App Service instance.

---

File: `README.md` — edited to remove Laravel boilerplate and focus on project intent and usage.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
