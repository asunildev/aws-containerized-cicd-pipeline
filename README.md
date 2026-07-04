# 🚀 AWS Containerized CI/CD Pipeline

![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-blue?logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![AWS ECR](https://img.shields.io/badge/AWS-ECR-FF9900?logo=amazon-aws&logoColor=white)
![Elastic Beanstalk](https://img.shields.io/badge/AWS-Elastic_Beanstalk-FF9900?logo=amazon-aws&logoColor=white)

An end-to-end DevOps project demonstrating how to containerize a React application using Docker and automate its testing and deployment to AWS Elastic Beanstalk with GitHub Actions.

This project was built as part of my Cloud & DevOps learning journey while transitioning from Embedded Software Engineering to Cloud Engineering.

---

## 📌 Project Overview

This project showcases a complete CI/CD workflow where every code push automatically:

- Builds the application
- Runs automated test cases
- Creates a production Docker image
- Deploys the application to AWS Elastic Beanstalk

The objective is to demonstrate a production-style deployment pipeline using modern DevOps practices.

---

## 🏗️ Architecture

![GitHub Actions](https://raw.githubusercontent.com/asunildev/devops-lab/main/projects/01-aws-containerized-cicd-pipeline/images/project-architecture.png)

```text
Feature Branch
      │
      ▼
GitHub Actions (CI)
      │
      ▼
Build Test Image
      │
      ▼
Run Tests
      │
      ▼
Pull Request
      │
      ▼
Merge to main
      │
      ▼
GitHub Actions (CD)
      │
      ▼
Build Production Docker Image
      │
      ▼
Push Image to Amazon ECR
      │
      ▼
Generate Dockerrun.aws.json
      │
      ▼
Deploy to Elastic Beanstalk
      │
      ▼
EC2 pulls image from ECR
      │
      ▼
Application Running
```

---

## ⚙️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Git & GitHub | Version control, collaboration, and source code management |
| GitHub Actions | CI/CD pipeline automation (build, test, deploy) |
| Docker | Containerization and environment consistency across development and production |
| Docker Multi-stage Builds | Optimized production image creation with reduced image size |
| Amazon ECR (Elastic Container Registry) | Secure Docker image storage and versioning |
| AWS Elastic Beanstalk | PaaS deployment and application hosting on AWS |
| AWS IAM | Identity and access management for secure AWS resource control |
| Nginx | Reverse proxy, load balancing, and static asset serving |
| React | Frontend SPA framework for building UI |
| Node.js | JavaScript runtime for build tooling and development environment |
| CI/CD | Automated pipeline for continuous integration and continuous deployment |
| Cloud Deployment (AWS) | Scalable cloud-based application hosting and delivery |

---

## ✨ Features

- Dockerized React application for consistent environments
- Automated test execution in CI pipeline
- Continuous Integration using GitHub Actions
- Continuous Deployment to AWS Elastic Beanstalk
- Production-ready deployment workflow with Docker multi-stage builds
- Infrastructure hosted on AWS cloud services

---

## 📂 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
├── docker-compose-dev.yml
├── package-lock.json
├── package.json
└── README.md

```

---

## 🔄 CI/CD Workflow

Whenever changes are pushed to the main branch:

1. GitHub Actions workflow starts
2. Project dependencies are installed
3. Automated test cases are executed
4. Docker image is built
5. Application is deployed to AWS Elastic Beanstalk
6. Latest version becomes available automatically

---

## 🧪 Running Locally

Clone the repository

```bash
git clone https://github.com/<your-username>/aws-containerized-cicd-pipeline.git
```

Move into the project

```bash
cd aws-containerized-cicd-pipeline
```

Run using Docker

```bash
docker build -t react-app .

docker run -p 3000:3000 react-app
```

Open:

```
http://localhost:3000
```

---

## 📸 Screenshots

### GitHub Actions Workflow
![GitHub Actions Workflow](https://raw.githubusercontent.com/asunildev/devops-lab/main/projects/01-aws-containerized-cicd-pipeline/images/github-actions.png)

### Amazon ECR Repository

![Amazon ECR](https://raw.githubusercontent.com/asunildev/devops-lab/main/projects/01-aws-containerized-cicd-pipeline/images/ecr.png)

### Elastic Beanstalk Environment

![Elastic Beanstalk](https://raw.githubusercontent.com/asunildev/devops-lab/main/projects/01-aws-containerized-cicd-pipeline/images/elasticbeanstalk.png)

### Running Application

![Application](https://raw.githubusercontent.com/asunildev/devops-lab/main/projects/01-aws-containerized-cicd-pipeline/images/application.png)

---

## 📚 Key Learnings

Through this project I gained hands-on experience with:

- Docker fundamentals
- Dockerfiles
- Containerized React applications
- GitHub Actions
- CI/CD pipelines
- Automated testing
- AWS Elastic Beanstalk deployment
- GitHub Secrets
- Production deployment workflows

---

## 🚀 Future Improvements

- Deploy using Amazon ECS
- Push Docker images to Amazon ECR
- Kubernetes deployment
- Infrastructure as Code using Terraform
- Monitoring with CloudWatch
- Multi-stage Docker builds
- Blue-Green Deployment

---

## 👨‍💻 About Me

I am an Embedded Software Engineer currently transitioning into Cloud & DevOps Engineering.

This repository is part of my hands-on DevOps learning journey where I build real-world projects using Docker, Kubernetes, AWS, GitHub Actions, and Infrastructure as Code.

Feel free to explore my repositories and follow my journey!

---

## ⭐ If you found this project interesting, consider giving it a Star!