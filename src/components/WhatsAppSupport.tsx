import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Clock, Users } from 'lucide-react';

interface WhatsAppSupportProps {
  phoneNumber?: string;
  defaultMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
}

const WhatsAppSupport: React.FC<WhatsAppSupportProps> = ({
  phoneNumber = '+923435146644',
  defaultMessage = 'Hello! I would like to know more about your services.',
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [isOnline, setIsOnline] = useState(true);

  // Simulate online/offline status based on business hours
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      
      // Business hours: Monday-Friday 9AM-6PM, Saturday 10AM-4PM
      const isWeekday = day >= 1 && day <= 5;
      const isSaturday = day === 6;
      const isWeekdayHours = hour >= 9 && hour < 18;
      const isSaturdayHours = hour >= 10 && hour < 16;
      
      setIsOnline((isWeekday && isWeekdayHours) || (isSaturday && isSaturdayHours));
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    {
      text: "I want to know about your tech services",
      icon: <Phone className="w-4 h-4" />
    },
    {
      text: "Tell me about skill development courses",
      icon: <Users className="w-4 h-4" />
    },
    {
      text: "What are your pricing options?",
      icon: <MessageCircle className="w-4 h-4" />
    },
    {
      text: "I need help with project consultation",
      icon: <Clock className="w-4 h-4" />
    }
  ];

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl shadow-2xl border border-gray-100 w-80 sm:w-96 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-3xl text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    isOnline ? 'bg-green-400' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div>
                  <div className="font-semibold">Redmatic Support</div>
                  <div className="text-xs text-green-100">
                    {isOnline ? 'Online • Typically replies instantly' : 'Offline • We\'ll reply soon'}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-sm">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you today? Choose a quick option below or type your message.
                </p>
              </div>
              <div className="text-xs text-gray-500 mt-1">Redmatic Team</div>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              <div className="text-xs font-semibold text-gray-600 mb-2">Quick Options:</div>
              {quickMessages.map((quickMsg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(quickMsg.text)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-red-50 rounded-xl transition-colors text-sm flex items-center space-x-2 group"
                >
                  <div className="text-gray-500 group-hover:text-red-500 transition-colors">
                    {quickMsg.icon}
                  </div>
                  <span className="text-gray-700 group-hover:text-red-700 transition-colors">
                    {quickMsg.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                rows={3}
              />
              
              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Business Hours */}
            <div className="mt-4 p-3 bg-gray-50 rounded-xl">
              <div className="text-xs font-semibold text-gray-600 mb-1">Business Hours:</div>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group relative"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {/* Online Indicator */}
            {isOnline && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            )}
            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">1</span>
            </div>
          </>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppSupport;