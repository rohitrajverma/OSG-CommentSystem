import { Comment, Users } from "../models/comment.model";
export const users: Users[] = [
  {
    name: 'Rohit',
    email: 'rohit@gmail.com',
    password: 'admin123',
    role: 'Admin',
    avatar:'boy.png'
  },
  {
    name: 'Raj',
    email: 'raj@gmail.com',
    password: 'qwerty',
    role: 'User',
    avatar:'man.png'
  }
]
export const data: Comment[] = [
  {
    username: "Nitin",
    avatar:'man2.png',
    date: "2021-09-01T05:25:02.081Z",
    text: "Nice post",
    likes: 12
  },
  {
    username: "Ankit",
    avatar:'boy.png',
    date: "2021-09-01T05:25:02.081Z",
    text: "Thanks",
    likes: 12,
    comments: [
      {
        username: "Ritwika",
        avatar:'woman.png',
        date: "2021-09-01T05:25:02.081Z",
        text: "test reply",
        likes: 8,
        comments: [
          {
            username: "Niharika",
            avatar:'woman2.png',
            date: "2021-09-01T05:25:02.081Z",
            text: "hello",
            likes: 3,
            comments: []
          }
        ]
      }
    ]
  }
]





