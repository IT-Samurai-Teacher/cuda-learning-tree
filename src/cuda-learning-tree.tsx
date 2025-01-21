import React, { useState, useEffect } from 'react';
import { ChevronDown, Book, Code, Brain, Cpu, Zap, GraduationCap, Lightbulb, Youtube } from 'lucide-react';

const LearningTree = () => {
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [selectedTopic, setSelectedTopic] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const stages = [
    {
      id: 'stage1',
      title: "Stage 1: CUDA for Kids 🎮",
      icon: Brain,
      color: "#10b981",
      emoji: "👶",
      content: {
        description: "Let's learn about CUDA in a fun way!",
        mainContent: `Imagine your computer is like a big school, and the GPU (Graphics Processing Unit) is the art teacher who helps draw pictures and make videos look amazing. 

CUDA is like giving this art teacher a superpower! Instead of just drawing one picture at a time, the teacher can:
• Split work into tiny pieces
• Draw thousands of pictures all at once
• Make games and animations super fast

It's like having a whole team of art teachers working together on one big project!`,
        examples: [
          {
            title: "Fun Example 🎨",
            content: "Think about coloring a huge coloring book. Instead of one person coloring everything, imagine having 100 friends each coloring a small part. That's how CUDA works!"
          }
        ]
      }
    },
    {
      id: 'stage2',
      title: "Stage 2: CUDA for High School Students 📚",
      icon: Code,
      color: "#3b82f6",
      emoji: "🎓",
      content: {
        description: "Understanding CUDA at a deeper level",
        mainContent: `Think of a GPU as a specialized engine designed to process lots of small tasks at the same time, especially for graphics or data-heavy operations. 

CUDA is a programming platform created by NVIDIA that:
• Harnesses GPU power beyond just graphics
• Divides complex calculations into smaller parts
• Processes many tasks simultaneously

It's like a team project where:
• Each team member handles a specific task
• Everyone works at the same time
• The project gets done much faster`,
        examples: [
          {
            title: "Practical Example 💡",
            content: "When editing a video, CUDA can process multiple frames simultaneously, making the rendering process much faster than doing it one frame at a time."
          }
        ]
      }
    },
    {
      id: 'stage3',
      title: "Stage 3: Professional CUDA Overview 💼",
      icon: Cpu,
      color: "#ef4444",
      emoji: "👨‍💻",
      content: {
        description: "Technical deep-dive into CUDA architecture",
        mainContent: `CUDA (Compute Unified Device Architecture) is a parallel computing platform and programming model developed by NVIDIA that extends GPU capabilities beyond traditional graphics rendering.

Key Components:
• Thousands of processing cores for parallel computation
• Hierarchical memory structure
• Sophisticated thread management
• Hardware-specific optimizations

Architecture Features:
• SIMT (Single Instruction, Multiple Thread) execution
• Unified memory architecture
• Dynamic parallelism
• Multi-GPU support`,
        examples: [
          {
            title: "Technical Example 🔧",
            code: `// Basic CUDA kernel structure
__global__ void vectorAdd(float* a, float* b, float* c, int n) {
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    if (i < n) {
        c[i] = a[i] + b[i];
    }
}`
          }
        ]
      }
    }
  ];

  const ContentSection = ({ content }) => (
    <div className="bg-gray-800 p-6 rounded-lg mt-4">
      <p className="text-gray-300 mb-4">{content.description}</p>
      
      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <pre className="whitespace-pre-wrap text-gray-200">
          {content.mainContent}
        </pre>
      </div>

      {content.examples?.map((example, idx) => (
        <div key={idx} className="mt-4 bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-yellow-400">{example.title}</h4>
          {example.content && (
            <p className="text-gray-200">{example.content}</p>
          )}
          {example.code && (
            <pre className="bg-gray-900 p-4 rounded-lg mt-2 overflow-x-auto">
              <code className="text-sm text-gray-200">{example.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Understanding CUDA in 2025</h1>
          <div className="flex items-center justify-center gap-2 text-xl text-gray-400">
            <span>Learn with</span>
            <a 
              href="https://www.youtube.com/@ITSamuraiTeacher"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              IT Samurai Teacher
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {stages.map((stage) => (
            <div key={stage.id} className="bg-gray-800 rounded-lg">
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-gray-700 transition-colors rounded-lg"
                onClick={() => toggleSection(stage.id)}
                style={{ borderLeft: `4px solid ${stage.color}` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{stage.emoji}</span>
                  <h2 className="text-xl font-semibold">{stage.title}</h2>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform ${
                    expandedSections.has(stage.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSections.has(stage.id) && (
                <ContentSection content={stage.content} />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Created by IT Samurai Teacher</div>
            <a 
              href="https://www.youtube.com/@ITSamuraiTeacher"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to Our Channel
            </a>
            <div className="text-gray-400">
              Author: Shihab Doole | © IT Samurai Teacher 2025
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LearningTree;