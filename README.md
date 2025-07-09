# Next.js TypeScript Hello World App

A simple Next.js application built with TypeScript, featuring automated Docker builds using Kaniko in Gitea Actions.

## 🚀 Features

- **Next.js 14** with TypeScript support
- **Interactive Hello World** component with click counter
- **API Routes** - RESTful API endpoint at `/api/hello`
- **Docker Ready** - Multi-stage Dockerfile optimized for production
- **CI/CD Pipeline** - Automated builds with Gitea Actions and Kaniko
- **Vercel Compatible** - Ready for deployment on Vercel

## 📁 Project Structure

```
/
├── .gitea/
│   └── workflows/
│       └── build.yml          # Gitea Actions workflow with Kaniko
├── src/
│   ├── pages/
│   │   ├── index.tsx          # Main page component
│   │   └── api/
│   │       └── hello.ts       # API endpoint
│   └── components/
│       └── HelloWorld.tsx     # Interactive hello world component
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── Dockerfile                # Multi-stage Docker build
└── .dockerignore            # Docker build context exclusions
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🐳 Docker

### Build locally:
```bash
docker build -t nextjs-hello-world .
```

### Run container:
```bash
docker run -p 3000:3000 nextjs-hello-world
```

## 🔄 CI/CD Pipeline

The project includes a Gitea Actions workflow (`.gitea/workflows/build.yml`) that:

- **Triggers** on push to `main` and `develop` branches
- **Uses Kaniko** for rootless Docker builds in Kubernetes
- **Builds** multi-stage Docker image
- **Pushes** to container registry with multiple tags:
  - Branch name (e.g., `main`, `develop`)
  - Git commit SHA
  - `latest` for main branch

### Registry Configuration

The workflow is configured to push to:
```
registry.dev-tools.svc.cluster.local:5000/nextjs-hello-world
```

Update the `REGISTRY` environment variable in the workflow file to match your registry.

## 🚀 Deployment Options

### 1. Vercel (Recommended)
- Connect your Git repository to Vercel
- Automatic deployments on push
- Zero configuration needed

### 2. Kubernetes
```bash
kubectl set image deployment/nextjs-app container=registry.dev-tools.svc.cluster.local:5000/nextjs-hello-world:latest
```

### 3. Docker
```bash
docker run -p 3000:3000 registry.dev-tools.svc.cluster.local:5000/nextjs-hello-world:latest
```

## 📡 API Endpoints

### GET /api/hello
Returns application information:
```json
{
  "message": "Hello from Next.js TypeScript API!",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production",
  "version": "1.0.0"
}
```

## 🔧 Configuration

### Environment Variables

- `NODE_ENV` - Environment mode (development/production)
- `NEXT_TELEMETRY_DISABLED` - Disable Next.js telemetry

### Docker Build Arguments

The Dockerfile supports standard Next.js build optimizations:
- Multi-stage build for smaller image size
- Non-root user for security
- Standalone output for optimal performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
