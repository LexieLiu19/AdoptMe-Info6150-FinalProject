import cat1 from '../assets/images/animals/cat/cat1.avif';
import cat2 from '../assets/images/animals/cat/cat2.avif';
import cat3 from '../assets/images/animals/cat/cat3.avif';
import cat4 from '../assets/images/animals/cat/cat4.avif';
import cat5 from '../assets/images/animals/cat/cat5.avif';
import cat6 from '../assets/images/animals/cat/cat6.avif';
import cat7 from '../assets/images/animals/cat/cat7.avif';
import cat8 from '../assets/images/animals/cat/cat8.avif';
import cat9 from '../assets/images/animals/cat/cat9.avif';
import cat10 from '../assets/images/animals/cat/cat10.avif';

import dog1 from '../assets/images/animals/dog/dog1.avif';
import dog2 from '../assets/images/animals/dog/dog2.avif';
import dog3 from '../assets/images/animals/dog/dog3.avif';
import dog4 from '../assets/images/animals/dog/dog4.avif';
import dog5 from '../assets/images/animals/dog/dog5.avif';
import dog6 from '../assets/images/animals/dog/dog6.avif';
import dog7 from '../assets/images/animals/dog/dog7.avif';
import dog8 from '../assets/images/animals/dog/dog8.avif';
import dog9 from '../assets/images/animals/dog/dog9.avif';
import dog10 from '../assets/images/animals/dog/dog10.avif';

import bird8 from '../assets/images/animals/bird/parrot1.png';
import rabbit3 from '../assets/images/animals/rabbit/r1.avif';

const animals = [
  {
    id: 1,
    name: 'Max',
    category: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    image: dog1,

    location: 'New York City',
    adoption_requirements: 'Needs a home with a fenced yard and plenty of space to run.',
    description:
      'Max is a wonderful companion and a loyal friend to his human family. This friendly and playful dog has a boundless energy that he loves to expend by spending time with people. He thrives on human interaction and is always eager to please his owners.',
  },
  {
    id: 2,
    name: 'Bella',
    category: 'Cat',
    breed: 'Tabby',
    age: 2,
    image: cat9,
    location: 'Los Angeles',
    adoption_requirements: 'Prefers a home with no other cats.',
    description:
      'Bella is a gentle and affectionate cat who loves to be petted. She enjoys napping in sunny spots and playing with her toys.',
  },
  {
    id: 3,
    name: 'Rocky',
    category: 'Dog',
    breed: 'Boxer',
    image: dog2,
    age: 5,
    location: 'Chicago',
    adoption_requirements: 'Prefers a home with no young children.',
    description:
      'Rocky is a loyal and protective dog who loves to play. He enjoys going for walks and playing with his toys.',
  },
  {
    id: 4,
    name: 'Loki',
    category: 'Cat',
    breed: 'Sphynx',
    image: cat2,
    age: 1,
    location: 'San Francisco',
    adoption_requirements: 'Prefers a home with no other pets.',
    description:
      'Loki is an energetic and playful cat who loves to run and climb. He enjoys being around his humans and playing with his toys.',
  },
  {
    id: 5,
    name: 'Lucy',
    category: 'Dog',
    breed: 'Labrador Retriever',
    age: 4,
    image: dog3,
    location: 'Miami',
    adoption_requirements:
      'Needs a home with a consistent routine and plenty of mental stimulation.',
    description:
      'Lucy is a smart and obedient dog who loves to learn new tricks. She enjoys going for walks and playing with her toys.',
  },
  {
    id: 543,
    name: 'Thumper',
    category: 'Other',
    image: rabbit3,
    breed: 'Holland Lop',
    age: 2,
    location: 'New York City',
    adoption_requirements:
      'Requires a home with plenty of space for exercise and exploration, and a loving and patient owner who can provide regular grooming and a healthy diet.',
    description:
      'Thumper is a delightful pet who brings joy and companionship to his human family. He is known for his curious and affectionate nature, and he loves to hop around and play, often entertaining his owners with his playful antics. Thumper is also a bit of a foodie and enjoys snacking on fresh vegetables, especially carrots and lettuce.',
  },
  {
    id: 6,
    name: 'Oreo',
    category: 'Cat',
    breed: 'Black and White Shorthair',
    age: 1,
    image: cat3,
    location: 'Dallas',
    adoption_requirements: 'Prefers a home with no dogs.',
    description:
      'Oreo is a curious and playful cat who loves to chase toys. She is great with other cats and enjoys snuggling with her humans.',
  },
  {
    id: 7,
    name: 'Charlie',
    category: 'Dog',
    image: dog4,
    breed: 'French Bulldog',
    age: 2,
    location: 'Denver',
    adoption_requirements: 'Requires a home with air conditioning as he is sensitive to heat.',
    description:
      'Charlie is a friendly and affectionate dog who loves to be around people. He enjoys playing fetch and going for walks.',
  },
  {
    id: 8,
    name: 'Luna',
    category: 'Cat',
    breed: 'Calico',
    image: cat4,
    age: 3,
    location: 'Phoenix',
    adoption_requirements: 'Prefers a home with no young children.',
    description:
      'Luna is a shy and gentle cat who enjoys spending time in quiet places. She likes to be petted but can be nervous around new people.',
  },
  {
    id: 1042,
    name: 'Piper',
    category: 'Other',
    image: bird8,
    breed: 'Parrot',
    age: 3,
    location: 'San Francisco',
    adoption_requirements:
      'Requires a home with an experienced bird owner who can provide ample space for flying and exercise, as well as a varied and nutritious diet.',
    description:
      'Piper is a friendly and talkative parrot who loves to sing and mimic sounds. She is very curious and enjoys exploring her surroundings, but can be easily startled by sudden movements or loud noises. Piper is looking for a loving and patient family who can provide her with the care and attention she needs.',
  },

  {
    id: 9,
    name: 'Cooper',
    category: 'Dog',
    image: dog5,
    breed: 'Australian Shepherd',
    age: 1,
    location: 'Seattle',
    adoption_requirements:
      'Needs a home with an experienced dog owner who can provide plenty of training and socialization.',
    description:
      'Cooper is a high-energy and intelligent dog who loves to learn new things. He enjoys playing fetch and going for long walks.',
  },
  {
    id: 10,
    name: 'Simba',
    category: 'Cat',
    breed: 'Persian',
    image: cat5,
    age: 4,
    location: 'Portland',
    adoption_requirements: 'Prefers a home with no other cats.',
    description:
      'Simba is a regal and independent cat who likes to be admired from a distance. He enjoys lounging in sunny spots and being groomed.',
  },
  {
    id: 11,
    name: 'Duke',
    category: 'Dog',
    image: dog6,
    breed: 'German Shepherd',
    age: 6,
    location: 'Austin',
    adoption_requirements: 'Prefers a home with no other pets.',
    description:
      'Duke is a loyal and protective dog who loves to be around his humans. He enjoys going for walks and playing fetch.',
  },
  {
    id: 12,
    name: 'Mittens',
    category: 'Cat',
    breed: 'Siamese',
    image: cat6,
    age: 2,
    location: 'Boston',
    adoption_requirements: 'Prefers a home with no dogs.',
    description:
      'Mittens is a vocal and affectionate cat who loves to be around her humans. She enjoys playing with her toys and napping in cozy places.',
  },
  {
    id: 13,
    name: 'Milo',
    category: 'Dog',
    image: dog7,
    breed: 'Beagle',
    age: 2,
    location: 'San Diego',
    adoption_requirements: 'Prefers a home with a fenced yard.',
    description:
      'Milo is a friendly and curious dog who loves to explore his surroundings. He enjoys going for walks and playing with his toys.',
  },
  {
    id: 14,
    name: 'Gizmo',
    category: 'Cat',
    breed: 'Orange Tabby',
    image: cat7,
    age: 3,
    location: 'Atlanta',
    adoption_requirements: 'Prefers a home with no young children.',
    description:
      'Gizmo is a mischievous and playful cat who loves to get into things. He enjoys chasing toys and napping in cozy places.',
  },
  {
    id: 15,
    name: 'Bailey',
    category: 'Dog',
    breed: 'Poodle',
    image: dog8,
    age: 4,
    location: 'Houston',
    adoption_requirements:
      'Needs a home with a consistent routine and plenty of mental stimulation.',
    description:
      'Bailey is a smart and elegant dog who loves to be pampered. She enjoys going for walks and playing with her toys.',
  },
  {
    id: 16,
    name: 'Milo',
    category: 'Cat',
    breed: 'Calico',
    image: cat8,
    age: 1,
    location: 'Denver',
    adoption_requirements: 'Prefers a home with no other cats.',
    description:
      'Milo is a playful and affectionate cat who loves to cuddle. She enjoys chasing toys and napping in sunny spots.',
  },
  {
    id: 17,
    name: 'Rocky',
    category: 'Dog',
    image: dog9,
    breed: 'Boxer',
    age: 5,
    location: 'Chicago',
    adoption_requirements: 'Prefers a home with no other dogs.',
    description:
      'Rocky is a gentle and loyal dog who loves to be around his humans. He enjoys going for walks and playing fetch.',
  },
  {
    id: 18,
    name: 'Lily',
    category: 'Cat',

    image: cat1,
    breed: 'Russian Blue',
    age: 3,
    location: 'New York City',
    adoption_requirements: 'Prefers a home with no young children.',
    description:
      'Lily is a quiet and independent cat who likes to keep to herself. She enjoys lounging in cozy places and being petted.',
  },
  {
    id: 19,
    name: 'Charlie',
    category: 'Dog',
    breed: 'Golden Retriever',
    image: dog10,
    age: 3,
    location: 'San Francisco',
    adoption_requirements: 'Needs a home with plenty of space to run and play.',
    description:
      'Charlie is a friendly and outgoing dog who loves to be around people. He enjoys going for long walks and playing in the water.',
  },
  {
    id: 20,
    name: 'Smokey',
    category: 'Cat',
    breed: 'Maine Coon',
    image: cat10,
    age: 2,
    location: 'Los Angeles',
    adoption_requirements: 'Prefers a home with no other cats.',
    description:
      'Smokey is a large and affectionate cat who loves to be around his humans. He enjoys playing with toys and napping in sunny spots.',
  },
];

export default animals;
