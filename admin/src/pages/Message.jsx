import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const Message = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/message/list', { headers: { token } });
      if (response.data.success) {
        setMessages(response.data.messages);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <p className="mb-2 font-semibold text-xl">All Messages</p>
      <div className="space-y-4">
        {loading ? (
          // Skeleton Loading
          Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm animate-pulse space-y-2"
            >
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))
        ) : messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id} className="p-4 border rounded-lg shadow-sm">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Phone:</strong> {msg.phone}</p>
              <p><strong>Message:</strong> {msg.text}</p>
              <p className="text-sm text-gray-500">
                {new Date(msg.date).toLocaleString('en-US', {
                  weekday: 'long', // 'Monday'
                  year: 'numeric', // '2025'
                  month: 'long', // 'April'
                  day: 'numeric', // '28'
                  hour: '2-digit', // '04 PM'
                  minute: '2-digit', // '30'
                  second: '2-digit' // '15'
                })}
              </p>
            </div>
          ))
        ) : (
          Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm animate-pulse space-y-2"
            >
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Message;
