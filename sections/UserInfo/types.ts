export type UserInfoProps = {
  title: string
  image: Image
  email: string
  userName: string | null
}

type Image = {
  src: string
  alt: string
}
