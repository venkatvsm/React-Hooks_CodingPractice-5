// Write your code here
import {ListContainer, NameEl, DescriptionEl} from './styledComponents'

const NoteItem = props => {
  const {notesList} = props
  const {name, description} = notesList
  return (
    <ListContainer>
      <NameEl>{name}</NameEl>
      <DescriptionEl>{description}</DescriptionEl>
    </ListContainer>
  )
}
export default NoteItem
