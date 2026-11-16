/**
 * EASY PHOTO REPLACEMENT
 * To use real/approved facility photos: place files inside public/photos/,
 * then change one value below to '/photos/your-photo.jpg'.
 * Photos shown by default are illustrative licensed stock photography, not the facility.
 * To change the logo, REPLACE public/branding/logo.png with your PNG.
 */
export const media = {
  logo: '/branding/logo.png',
  photos: {
    hero: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=1500',
    building: 'https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg?auto=compress&cs=tinysrgb&w=1250',
    discovery: 'https://images.pexels.com/photos/8923701/pexels-photo-8923701.jpeg?auto=compress&cs=tinysrgb&w=1250',
    teamwork: 'https://images.pexels.com/photos/8923364/pexels-photo-8923364.jpeg?auto=compress&cs=tinysrgb&w=1250',
    preschool: 'https://images.pexels.com/photos/32432135/pexels-photo-32432135.jpeg?auto=compress&cs=tinysrgb&w=1250',
    schoolAge: 'https://images.pexels.com/photos/8923373/pexels-photo-8923373.jpeg?auto=compress&cs=tinysrgb&w=1250',
  },
} as const;

export type PhotoName = keyof typeof media.photos;
