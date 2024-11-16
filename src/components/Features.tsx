import { Mic, MessageSquareText, Zap, Brain, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Real-time Transcription',
    description: 'Get instant, accurate transcriptions of your Google Meet conversations',
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: 'Smart Autocomplete',
    description: 'Predictive word suggestions to help you communicate more fluently',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Feedback',
    description: 'Real-time pronunciation and accent improvement suggestions',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI-Powered Learning',
    description: 'Personalized learning insights based on your conversations',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and reports',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Meeting Enhancement',
    description: 'Boost your confidence in English-speaking professional environments',
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div className="rounded-lg p-3 bg-primary/10 w-fit mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}