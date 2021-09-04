export interface Comment {
  username: string;
  avatar:string;
  date: string;
  text: string;
  likes: number;
  comments?: Array<Comment>;
}

export interface Users {
  name?: string;
  email: string;
  password: string;
  role: string;
  avatar:string;
}

export interface Toast {
  type: 'success' | 'error' | 'warning';
  title: string;
  body: string;
  delay: number;
}