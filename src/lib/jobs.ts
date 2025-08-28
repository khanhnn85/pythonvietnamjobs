import type { JobPosting } from '@/ai/flows/filter-jobs';

export interface Job extends JobPosting {
  id: string;
}

export const allJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Python Developer',
    company: 'TechCorp Vietnam',
    location: 'Ho Chi Minh City',
    description: 'Join our innovative team to build scalable backend services using Python and Django.',
    fullDescription: 'TechCorp Vietnam is seeking an experienced Senior Python Developer to lead the development of our core platform. You will work with a talented team of engineers to design, develop, and maintain high-performance, reliable, and scalable backend systems. This role offers an opportunity to work on challenging projects and make a significant impact.',
    requirements: '5+ years of Python experience, strong knowledge of Django or Flask, experience with RESTful APIs, and proficiency in SQL databases like PostgreSQL. Experience with Docker and Kubernetes is a plus.'
  },
  {
    id: '2',
    title: 'Python/Odoo Developer',
    company: 'Innovate Solutions',
    location: 'Hanoi',
    description: 'Customize and develop modules for Odoo ERP system. Strong Python skills required.',
    fullDescription: 'Innovate Solutions is looking for a Python/Odoo Developer to join our ERP team. The ideal candidate will be responsible for designing, developing, and maintaining Odoo modules. You will work closely with business analysts and stakeholders to understand requirements and deliver effective solutions.',
    requirements: '2+ years of experience with Python and Odoo development. Solid understanding of Odoo framework, PostgreSQL, and XML-RPC. Ability to work independently and in a team.'
  },
  {
    id: '3',
    title: 'Data Engineer (Python, SQL)',
    company: 'Data Analytics Inc.',
    location: 'Da Nang',
    description: 'Build and maintain data pipelines and infrastructure for our analytics platform.',
    fullDescription: 'As a Data Engineer at Data Analytics Inc., you will be a key player in our data team. You will be responsible for designing, building, and optimizing our data pipelines, ensuring data quality and availability for our data scientists and analysts. If you are passionate about data and proficient in Python, we would love to hear from you.',
    requirements: '3+ years of experience as a Data Engineer. Expertise in Python, SQL, and ETL processes. Experience with big data technologies like Spark, Hadoop, and Airflow. Cloud platform experience (AWS, GCP, or Azure) is highly desirable.'
  },
  {
    id: '4',
    title: 'Junior Python Developer',
    company: 'Startup Hub',
    location: 'Ho Chi Minh City',
    description: 'An exciting opportunity for a junior developer to grow their skills in a fast-paced startup environment.',
    fullDescription: 'Startup Hub is looking for a motivated Junior Python Developer to join our growing team. You will have the chance to work on various parts of our product, from backend APIs to data processing scripts. This is a great role for someone eager to learn and contribute to a dynamic team.',
    requirements: '1-2 years of experience with Python. Basic understanding of web frameworks like Flask or Django. Familiarity with Git and basic database concepts. A strong desire to learn and problem-solving skills are essential.'
  },
  {
    id: '5',
    title: 'AI/ML Engineer',
    company: 'AI First',
    location: 'Hanoi',
    description: 'Develop and deploy machine learning models to solve real-world problems.',
    fullDescription: 'AI First is at the forefront of artificial intelligence research and application. We are seeking a talented AI/ML Engineer to design, train, and deploy machine learning models. You will work on cutting-edge projects in areas like natural language processing, computer vision, and predictive analytics.',
    requirements: 'Strong background in Machine Learning and Deep Learning. Proficient in Python and ML libraries such as TensorFlow, PyTorch, and scikit-learn. Experience with data processing and feature engineering. Master\'s or PhD in a related field is a plus.'
  },
  {
    id: '6',
    title: 'Backend Engineer (Python/Go)',
    company: 'Global Fintech',
    location: 'Remote',
    description: 'Work on a high-frequency trading platform using Python and Go.',
    fullDescription: 'Global Fintech is hiring a Backend Engineer to enhance our core trading systems. This role involves working with both Python for data analysis and Go for high-performance microservices. You will be part of a distributed team building a robust and low-latency platform.',
    requirements: '4+ years of backend development experience. Proficiency in Python and/or Go. Experience with microservices architecture, gRPC, and message queues like Kafka or RabbitMQ. Financial industry experience is a significant advantage.'
  },
  {
    id: '7',
    title: 'Full-stack Developer (Python/React)',
    company: 'E-commerce Leader',
    location: 'Ho Chi Minh City',
    description: 'Develop features for our leading e-commerce platform, using Python on the backend and React on the frontend.',
    fullDescription: 'Join the engineering team at E-commerce Leader and contribute to a platform used by millions. We are looking for a Full-stack Developer who is comfortable working across the stack. You will build new user-facing features, improve backend performance, and collaborate with product managers and designers.',
    requirements: '3+ years of full-stack development experience. Strong skills in Python (Django/Flask) and JavaScript (React). Experience with modern web technologies, REST APIs, and databases. A passion for creating great user experiences.'
  },
  {
    id: '8',
    title: 'DevOps Engineer',
    company: 'Cloud Native VN',
    location: 'Da Nang',
    description: 'Automate our infrastructure and deployment pipelines. Strong scripting skills in Python or Bash needed.',
    fullDescription: 'Cloud Native VN is looking for a DevOps Engineer to help us build and scale our cloud infrastructure. You will be responsible for CI/CD pipelines, infrastructure as code (IaC), monitoring, and ensuring the reliability of our services. This is a great opportunity to work with modern DevOps tools and practices.',
    requirements: 'Experience with CI/CD tools (e.g., Jenkins, GitLab CI). Proficiency in scripting with Python or Bash. Hands-on experience with Docker, Kubernetes, and Terraform. Strong knowledge of a major cloud provider (AWS, GCP, Azure).'
  },
];
