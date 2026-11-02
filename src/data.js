import {
  Sprout, Gamepad2, Users, GraduationCap, Mic, Leaf, HeartPulse, Lightbulb, Palette,
  BookOpen, HeartHandshake, Backpack, Handshake, Compass,
  Facebook, Instagram, Twitter, Youtube, Linkedin, Clapperboard,
} from 'lucide-react'

export const links = {
  facebook: 'https://www.facebook.com/p/Deyoce-Rwanda-CBC-61573879423692/',
  instagram: 'https://www.instagram.com/deyocerwandacbc/',
  x: 'https://x.com/DeyocerwandaCBC',
  tiktok: 'https://www.tiktok.com/@deyoce.rwanda',
  youtube: 'https://www.youtube.com/@DEYOCERWANDA',
  linkedin: 'https://rw.linkedin.com/in/thierry-m-286606356',
}

export const social = [
  { name: 'Instagram', href: links.instagram, icon: Instagram },
  { name: 'Facebook', href: links.facebook, icon: Facebook },
  { name: 'X', href: links.x, icon: Twitter },
  { name: 'TikTok', href: links.tiktok, icon: Clapperboard },
  { name: 'YouTube', href: links.youtube, icon: Youtube },
]

export const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/focus', label: 'Focus areas' },
  { to: '/where-we-work', label: 'Where we work' },
]

export const programs = [
  {
    title: 'Incubation and mentoring',
    text: 'We work alongside young people as they turn ideas into skills, projects and small enterprises, with mentors who stay with them past the first meeting.',
    tag: 'Seed', icon: Sprout, color: 'green',
  },
  {
    title: 'Scrabble – Gaming on Purpose',
    text: 'A word game becomes a classroom. Children and youth build vocabulary, focus and confidence through play, running in communities such as Gikomero.',
    tag: 'Grow', icon: Gamepad2, color: 'orange',
  },
  {
    title: 'Community youth engagement',
    text: 'Youth-led activities that bring young people together around education, child empowerment and local action across Kigali.',
    tag: 'Fruit', icon: Users, color: 'blue',
  },
]

export const places = [
  { name: 'Gikomero', note: 'Scrabble – Gaming on Purpose', color: 'orange' },
  { name: 'Ntora', note: 'Youth engagement', color: 'blue' },
  { name: 'Gisozi', note: 'Youth engagement', color: 'green' },
  { name: 'Gasabo', note: 'Community initiatives', color: 'grey' },
]

export const focusAreas = [
  { name: 'Education', note: 'Learning that keeps young people in school and brings them back.', icon: GraduationCap, color: 'blue' },
  { name: 'Debate and public speaking', note: 'Voice, argument and the confidence to be heard.', icon: Mic, color: 'orange' },
  { name: 'Green initiatives', note: 'Youth-led action for a healthier environment.', icon: Leaf, color: 'green' },
  { name: 'Health awareness', note: 'Practical knowledge for young people and their communities.', icon: HeartPulse, color: 'orange' },
  { name: 'Entrepreneurship', note: 'Turning ideas into work, income and jobs.', icon: Lightbulb, color: 'blue' },
  { name: 'Arts and culture', note: 'Creative and cultural programs that build identity and unity.', icon: Palette, color: 'green' },
]

export const supported = [
  { name: 'Out-of-school youth', icon: Backpack, color: 'orange' },
  { name: 'Teen mothers', icon: HeartHandshake, color: 'blue' },
  { name: 'Young people who dropped out', icon: BookOpen, color: 'green' },
]

export const approach = [
  { name: 'Mentorship', icon: Compass },
  { name: 'Community projects', icon: Users },
  { name: 'Partnerships', icon: Handshake },
]
