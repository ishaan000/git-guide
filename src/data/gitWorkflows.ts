interface Section {
  title: string;
  content: string;
  code?: string;
  additionalContent?: string;
}

export const sections: Section[] = [
  {
    title: "Why CI/CD Matters",
    content: `Imagine you're working on a team project. Every time someone pushes code, you need to:
1. Pull the latest changes
2. Run tests
3. Build the project
4. Deploy to staging
5. Check if everything works

Now imagine doing this manually, 10 times a day. Sounds exhausting, right? That's where CI/CD comes in!`,
    code: `# Real-world Scenario
# Before CI/CD:
1. Developer pushes code
2. Team lead manually pulls changes
3. Runs tests locally
4. Builds the project
5. Deploys to staging
6. Checks if everything works
7. Repeats for every change

# After CI/CD:
1. Developer pushes code
2. Everything happens automatically
3. Team gets notified of results`,
    additionalContent: `
🎯 Learning Goals:
• Understand why CI/CD is important
• Identify manual processes that can be automated
• See the real-world impact

💡 Interactive Exercise:
Think about your current project:
• What manual steps do you repeat?
• How often do you do them?
• What could go wrong?

📚 Key Benefits:
• Faster development
• Fewer human errors
• Consistent quality
• Better team collaboration`,
  },
  {
    title: "Your First Workflow",
    content: `Let's create your first GitHub Actions workflow! We'll start with something simple: running tests when code is pushed.

Think about what you need:
1. When should it run? (trigger)
2. What should it do? (steps)
3. Where should it run? (environment)`,
    code: `# Let's build this step by step
name: My First Workflow

# 1. When should it run?
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# 2. What should it do?
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      # Step 1: Get the code
      - uses: actions/checkout@v3
      
      # Step 2: Set up the environment
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm install
      
      # Step 4: Run tests
      - name: Run tests
        run: npm test`,
    additionalContent: `
🎯 Learning Goals:
• Understand workflow structure
• Learn about triggers
• Master basic steps

💡 Interactive Exercise:
Create your own workflow:
1. Choose a trigger (when should it run?)
2. List the steps you need
3. Try running it!

📚 Key Concepts:
• Workflow: Series of automated steps
• Trigger: When to run
• Job: What to run
• Step: How to run it`,
  },
  {
    title: "Workflow Building Blocks",
    content: `Think of a workflow like a recipe. You need:
1. Ingredients (inputs)
2. Steps (what to do)
3. Timing (when to do it)
4. Tools (what to use)

Let's break down each part and see how they work together.`,
    code: `# Workflow Building Blocks
name: Understanding Workflows

# 1. Inputs (like recipe ingredients)
on:
  push:
    branches: [ main ]
  workflow_dispatch:
    inputs:
      environment:
        description: 'Where to deploy'
        required: true
        default: 'staging'

# 2. Jobs (like recipe sections)
jobs:
  prepare:
    runs-on: ubuntu-latest
    steps:
      - name: Get ingredients
        run: echo "Getting ready..."

  cook:
    needs: prepare
    runs-on: ubuntu-latest
    steps:
      - name: Mix ingredients
        run: echo "Mixing..."

  serve:
    needs: cook
    runs-on: ubuntu-latest
    steps:
      - name: Plate food
        run: echo "Serving..."`,
    additionalContent: `
🎯 Learning Goals:
• Understand workflow components
• Learn job dependencies
• Master step sequencing

💡 Interactive Exercise:
Design a workflow for:
• Building a website
• Running tests
• Deploying to staging

📚 Key Components:
• Triggers: When to run
• Jobs: What to run
• Steps: How to run
• Dependencies: Order of operations`,
  },
  {
    title: "Secrets and Security",
    content: `Imagine you're storing sensitive information like passwords. You wouldn't write them in plain text, right?

Let's learn how to handle secrets securely in your workflows.`,
    code: `# Handling Secrets Safely
jobs:
  secure:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      # ❌ Bad: Hardcoded secrets
      - name: Bad Practice
        run: |
          echo "API_KEY=123456"  # Never do this!
      
      # ✅ Good: Using GitHub Secrets
      - name: Good Practice
        env:
          API_KEY: "\${{\ secrets.PROD_API_KEY }}"
        run: |
          echo "Using secure secret"
      
      # ✅ Better: Environment-specific secrets
      - name: Best Practice
        env:
          DB_URL: "\${{\ secrets.PROD_DB_URL }}"
        run: |
          echo "Using environment-specific secret"`,
    additionalContent: `
🎯 Learning Goals:
• Understand secret management
• Learn security best practices
• Master environment variables

💡 Interactive Exercise:
1. Create a secret in GitHub
2. Use it in a workflow
3. Test it safely

📚 Security Tips:
• Never hardcode secrets
• Use environment-specific secrets
• Rotate secrets regularly
• Limit secret access`,
  },
  {
    title: "Testing in CI/CD",
    content: `Testing is like quality control in a factory. You want to catch issues early, right?

Let's explore different types of tests and how to run them automatically.`,
    code: `# Comprehensive Testing
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      # 1. Unit Tests (testing individual parts)
      - name: Unit Tests
        run: npm run test:unit
      
      # 2. Integration Tests (testing parts together)
      - name: Integration Tests
        env:
          TEST_DB_URL: "\${{\ secrets.TEST_DB_URL }}"
        run: npm run test:integration
      
      # 3. E2E Tests (testing the whole thing)
      - name: E2E Tests
        env:
          TEST_URL: "\${{\ secrets.TEST_URL }}"
        run: npm run test:e2e
      
      # 4. Performance Tests
      - name: Performance Tests
        run: npm run test:perf`,
    additionalContent: `
🎯 Learning Goals:
• Understand test types
• Learn test automation
• Master test environments

💡 Interactive Exercise:
Create a test workflow:
1. Choose test types
2. Set up test environment
3. Run and analyze results

📚 Test Types:
• Unit: Individual components
• Integration: Component interaction
• E2E: Complete user flows
• Performance: Speed and efficiency`,
  },
  {
    title: "Deployment Strategies",
    content: `Deploying code is like launching a rocket. You need a plan, safety checks, and a way to abort if something goes wrong.

Let's explore different ways to deploy your code safely.`,
    code: `# Deployment Strategies
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      # Strategy 1: Blue-Green (zero downtime)
      - name: Blue-Green Deployment
        run: |
          # Deploy new version (green)
          kubectl apply -f green-deployment.yaml
          # Wait for health check
          kubectl rollout status deployment/green
          # Switch traffic
          kubectl patch service/app -p '{"spec":{"selector":{"version":"green"}}}'
      
      # Strategy 2: Rolling Update (gradual rollout)
      - name: Rolling Update
        run: |
          kubectl rollout restart deployment/app
          kubectl rollout status deployment/app
      
      # Strategy 3: Canary (test with subset)
      - name: Canary Release
        run: |
          # Deploy to 10% of users
          kubectl apply -f canary-deployment.yaml
          # Monitor metrics
          sleep 300
          # Full rollout if successful
          kubectl apply -f full-deployment.yaml`,
    additionalContent: `
🎯 Learning Goals:
• Understand deployment strategies
• Learn zero-downtime deployments
• Master rollback procedures

💡 Interactive Exercise:
Choose a deployment strategy:
1. Identify your needs
2. Plan the deployment
3. Test the rollback

📚 Key Strategies:
• Blue-Green: Zero downtime
• Rolling: Gradual updates
• Canary: Test with subset
• Feature Flags: Toggle features`,
  },
  {
    title: "Monitoring and Alerts",
    content: `Think of monitoring like having a health check system. You want to know if something's wrong before your users do!

Let's set up monitoring and alerts for your pipeline.`,
    code: `# Monitoring and Alerts
jobs:
  monitor:
    runs-on: ubuntu-latest
    steps:
      # 1. Health Checks
      - name: Check Health
        run: |
          # Check application
          curl -f "\${{\ secrets.APP_URL }}/health" || exit 1
          # Check database
          psql "\${{\ secrets.DB_URL }}" -c "SELECT 1" || exit 1
      
      # 2. Performance Monitoring
      - name: Monitor Performance
        run: |
          # Check resources
          kubectl top pods
          kubectl top nodes
      
      # 3. Alerts
      - name: Send Alerts
        if: failure()
        run: |
          # Notify team
          curl -X POST "\${{\ secrets.SLACK_WEBHOOK }}" \
            -H 'Content-type: application/json' \
            -d '{"text":"Deployment failed!"}'`,
    additionalContent: `
🎯 Learning Goals:
• Understand monitoring basics
• Learn alert configuration
• Master health checks

💡 Interactive Exercise:
Set up monitoring:
1. Choose metrics to track
2. Set up health checks
3. Configure alerts

📚 Key Metrics:
• Deployment success
• Build time
• Test coverage
• Error rates`,
  },
  {
    title: "Best Practices",
    content: `Now that you understand the basics, let's look at how to make your workflows more maintainable and efficient.

Think about:
1. Code organization
2. Reusability
3. Security
4. Performance`,
    code: `# Best Practices Example
name: Production Pipeline

# 1. Clear organization
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# 2. Reusable workflows
jobs:
  validate:
    uses: ./.github/workflows/validate.yml
    
  test:
    needs: validate
    uses: ./.github/workflows/test.yml
    
  build:
    needs: test
    uses: ./.github/workflows/build.yml
    
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    uses: ./.github/workflows/deploy.yml
    with:
      environment: production
      secrets: inherit`,
    additionalContent: `
🎯 Learning Goals:
• Understand workflow organization
• Learn reusable workflows
• Master best practices

💡 Interactive Exercise:
Review your workflow:
1. Identify improvements
2. Apply best practices
3. Test the changes

📚 Best Practices:
• Keep workflows DRY
• Use environment protection
• Implement proper testing
• Monitor and optimize`,
  },
];
