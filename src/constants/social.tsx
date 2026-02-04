import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import type { ReactNode } from 'react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    platform: 'GitHub', 
    url: 'https://github.com/yourusername', 
    icon: <FaGithub className="w-5 h-5" /> 
  },
  { 
    platform: 'LinkedIn', 
    url: 'https://linkedin.com/in/yourusername', 
    icon: <FaLinkedin className="w-5 h-5" /> 
  },
  { 
    platform: 'X', 
    url: 'https://x.com/yourusername', 
    icon: <FaXTwitter className="w-5 h-5" /> 
  },
  { 
    platform: 'Instagram', 
    url: 'https://instagram.com/yourusername', 
    icon: <FaInstagram className="w-5 h-5" /> 
  },
  { 
    platform: 'YouTube', 
    url: 'https://youtube.com/@yourusername', 
    icon: <FaYoutube className="w-5 h-5" /> 
  },
];
