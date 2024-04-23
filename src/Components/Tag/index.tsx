import { TagContainer, TagContainerButton } from './styled'

type Props = {
  children: string
  typeOfTag: 'info' | 'button'
  to?: string
  onClick?: () => void
}
const Tag = ({ children, typeOfTag, to, onClick }: Props) => {
  if (typeOfTag === 'info') {
    return <TagContainer>{children}</TagContainer>
  } else {
    return (
      <TagContainerButton to={to as string} onClick={onClick}>
        {children}
      </TagContainerButton>
    )
  }
}

export default Tag
