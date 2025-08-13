import 'pretendard-lite/style.css';
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/introduction')
}
