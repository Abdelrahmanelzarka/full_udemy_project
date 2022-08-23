import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
import Block from './Components/Block'
import Best from'./Components/Best'

const courses=[
  {
    id:'1',
    title: 'Learn Python: The Complete Python Programming Course',
    instructor: 'Avinash Jain',
    link: "https://www.udemy.com/course/pythonforbeginners/",
    rating: 4.3,
    image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
    students:"2,982",
    price: 16.99,
    bestSeller:false,
  },
  {
    id:'2',
    title: 'Learning Python for Data Analysis and Visualization',
    instructor: 'Jose Portilla',
    link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
    rating: 4.3,
    image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
    students:"18,017",
    price: 19.99,
    bestSeller:true,
  },
  {
    id:'3',
    title: 'Python for Beginners - Learn Programming from scratch',
    instructor: 'Edwin Diaz',
    link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
    rating: 4.4,
    image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
    students:"1,798",
    price: 14.99,
    bestSeller:false,
  },
  {
    id:'4',
    title: 'Learn Python: Python for Beginners',
    instructor: 'Edwin Diaz',
    link: "https://www.udemy.com/course/learn-python/",
    rating: 4.2,
    image: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
    students:"2,774",
    price: 16.99,
    bestSeller:false,
  },
  {
    id:'5',
    title: 'Python Beyond the Basics - Object-Oriented Programming',
    instructor: 'Infinite Skills',
    link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
    rating: 4.3,
    image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
    students:"2,935",
    price: 17.99,
    bestSeller:false,
  }
]

function App() {
  return (
    <div className="App">
      <Block
      title='Expand your career opportunities with Python'
      description1='Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its'
      description2='simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll'
      description3='learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.'
     button='Explore Python'
     />

      <div className='cards'>
     <Card
     cardobject={courses[0]}
     />
     <div>
     <Card
     cardobject={courses[1]}
     />
     <Best/>
     </div>
     <Card
     cardobject={courses[2]}
     />
     <Card
     cardobject={courses[3]}
     />
     <Card
     cardobject={courses[4]}
     />
     </div>
    
    
    </div>
  );
}

export default App;
