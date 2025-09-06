import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Users, Award, Target, Lightbulb } from "lucide-react"

// Team data based on SIH 2025 project
const teamData = {
  projectInfo: {
    title: "Automated High-Current Short-Circuit Test System for MCB",
    description: "IEC 60898-1:2015 compliant testing platform for Miniature Circuit Breakers",
    problemStatement: "SIH1721",
    organization: "Smart India Hackathon 2025"
  },
  teamMembers: [
    {
      id: 1,
      name: "Team Lead",
      role: "Project Manager & Full-Stack Developer",
      avatar: "/avatars/team-lead.jpg",
      bio: "Leading the development of the automated MCB testing system with expertise in industrial automation and web technologies.",
      skills: ["React", "Node.js", "Industrial IoT", "Project Management"],
      github: "#",
      linkedin: "#",
      email: "teamlead@example.com"
    },
    {
      id: 2,
      name: "Hardware Engineer",
      role: "Circuit Design & Testing Specialist",
      avatar: "/avatars/hardware-eng.jpg",
      bio: "Specialized in high-current circuit design and MCB testing protocols. Expert in IEC 60898-1:2015 standards.",
      skills: ["Circuit Design", "IEC Standards", "High-Current Testing", "PLC Programming"],
      github: "#",
      linkedin: "#",
      email: "hardware@example.com"
    },
    {
      id: 3,
      name: "Software Developer",
      role: "Frontend & UI/UX Developer",
      avatar: "/avatars/frontend-dev.jpg",
      bio: "Creating intuitive interfaces for complex industrial testing systems with focus on real-time data visualization.",
      skills: ["React", "TypeScript", "UI/UX", "Data Visualization"],
      github: "#",
      linkedin: "#",
      email: "frontend@example.com"
    },
    {
      id: 4,
      name: "AI/ML Engineer",
      role: "Predictive Analytics Specialist",
      avatar: "/avatars/ai-engineer.jpg",
      bio: "Developing machine learning models for predictive maintenance and MCB health analysis using electrical signatures.",
      skills: ["Python", "TensorFlow", "Predictive Analytics", "Signal Processing"],
      github: "#",
      linkedin: "#",
      email: "ai@example.com"
    },
    {
      id: 5,
      name: "Backend Developer",
      role: "API & Database Specialist",
      avatar: "/avatars/backend-dev.jpg",
      bio: "Building robust backend systems for handling high-frequency test data and real-time monitoring.",
      skills: ["Node.js", "MongoDB", "REST APIs", "Real-time Systems"],
      github: "#",
      linkedin: "#",
      email: "backend@example.com"
    },
    {
      id: 6,
      name: "Quality Assurance",
      role: "Testing & Compliance Specialist",
      avatar: "/avatars/qa-engineer.jpg",
      bio: "Ensuring system reliability and compliance with international electrical safety standards.",
      skills: ["Quality Assurance", "IEC Compliance", "Test Automation", "Documentation"],
      github: "#",
      linkedin: "#",
      email: "qa@example.com"
    }
  ],
  projectVision: {
    mission: "To revolutionize MCB testing with unprecedented accuracy and automation",
    vision: "Creating the next generation of electrical safety testing equipment",
    objectives: [
      "Achieve IEC 60898-1:2015 full compliance",
      "Reduce testing time by 70%",
      "Enhance safety through automation",
      "Provide comprehensive test analytics"
    ]
  }
}

export function TeamPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
        </div>
        <Badge variant="secondary" className="text-sm">
          Smart India Hackathon 2025 • Problem Statement SIH1721
        </Badge>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the innovative team behind the Automated High-Current Short-Circuit Test System for MCBs
        </p>
      </div>

      {/* Project Vision */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            <CardTitle>Project Vision</CardTitle>
          </div>
          <CardDescription>{teamData.projectInfo.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Mission
            </h4>
            <p className="text-gray-600">{teamData.projectVision.mission}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Vision
            </h4>
            <p className="text-gray-600">{teamData.projectVision.vision}</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-3">Key Objectives</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {teamData.projectVision.objectives.map((objective, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <CardDescription className="font-medium text-blue-600">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 text-center">{member.bio}</p>
              
              {/* Skills */}
              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Key Skills</h5>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-2">
                <Button size="sm" variant="outline" className="p-2">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Project Impact & Innovation</CardTitle>
          <CardDescription>
            How our automated MCB testing system revolutionizes electrical safety
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000A</div>
            <div className="text-sm text-gray-600">Maximum Test Current</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
            <div className="text-sm text-gray-600">System Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
            <div className="text-sm text-gray-600">Time Reduction</div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Specifications</CardTitle>
          <CardDescription>
            Key technical features of our automated testing system
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Compliance & Standards</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• IEC 60898-1:2015 Fully Compliant</li>
              <li>• Automated R/XL Circuit Configuration</li>
              <li>• High-Speed Waveform Capture</li>
              <li>• Real-time Data Analysis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">MCB Coverage</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Single Pole, SPN, DP, TP, FP MCBs</li>
              <li>• Current Range: 0.5A - 63A</li>
              <li>• Breaking Capacity up to 10kA</li>
              <li>• Universal MCB Mounting System</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
