import './App.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'

function App() {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
    'Tailwind CSS', 'Git', 'REST APIs', 'PostgreSQL', 'MongoDB'
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features',
      technologies: ['React', 'Firebase', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Portfolio Analytics',
      description: 'Data visualization dashboard for tracking portfolio performance metrics',
      technologies: ['Python', 'React', 'D3.js', 'FastAPI'],
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FB
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Fernando Boya</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </p>
              <p className="text-lg text-slate-400 mb-8">
                I build exceptional digital experiences that combine beautiful design with powerful functionality.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  View Resume
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                  alt="Developer workspace with laptop and coffee"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/1e293b/94a3b8?text=Developer+Workspace'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Code className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Passionate about creating clean, efficient code and building scalable applications that solve real-world problems.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-pink-400 mb-4" />
                <CardTitle className="text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  5+ years of experience in full-stack development, working with modern technologies and agile methodologies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Continuously learning and staying up-to-date with the latest technologies and best practices in software development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-lg px-6 py-3 bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-slate-700">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-400 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-6 justify-center">
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
              <a href="https://github.com/fboya" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
              <a href="https://www.linkedin.com/in/fernandoboya/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
              <a href="mailto:fernando.boya@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Fernando Boya. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
