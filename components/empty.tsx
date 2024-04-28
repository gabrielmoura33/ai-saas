import Image from 'next/image'
type Props = {
  label: string
}
export function Empty(props: Props) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-[38rem] w-[38rem]">
        <Image alt="Empty space" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm-text-center">{props.label}</p>
    </div>
  )
}
