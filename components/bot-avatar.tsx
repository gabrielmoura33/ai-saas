import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

export function BotAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  )
}
