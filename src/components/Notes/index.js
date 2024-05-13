// Write your code here
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import NoteItem from '../NoteItem'
import {
  BgContainer,
  CardContainer,
  Heading,
  AddNotesContainer,
  InputField,
  TextAreaField,
  AddBtn,
  EmptyContainer,
  EmptyLIstImage,
  EmptyContainerText,
  EmptyContainerPara,
  UlListContainer,
} from './styledComponents'

const Notes = () => {
  const [name, changeName] = useState('')
  const [description, changeDescription] = useState('')
  const [notesList, changeNotesList] = useState([])
  const onChangeTitle = event => {
    changeName(event.target.value)
  }
  const onChangedescription = event => {
    changeDescription(event.target.value)
  }
  const renderSubmitForm = event => {
    event.preventDefault()
    const updatedList = {
      id: uuid(),
      name,
      description,
    }
    changeNotesList(prevState => [...prevState, updatedList])
    changeName('')
    changeDescription('')
  }
  return (
    <BgContainer>
      <CardContainer>
        <Heading>Notes</Heading>
        <AddNotesContainer onSubmit={renderSubmitForm}>
          <InputField
            type="text"
            placeholder="Title"
            value={name}
            onChange={onChangeTitle}
          />
          <TextAreaField
            value={description}
            placeholder="Take a Note..."
            onChange={onChangedescription}
          />
          <AddBtn type="submit">Add</AddBtn>
        </AddNotesContainer>
        {notesList.length === 0 ? (
          <EmptyContainer>
            <EmptyLIstImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyContainerText>No Notes Yet</EmptyContainerText>
            <EmptyContainerPara>
              Notes you add Will appear here
            </EmptyContainerPara>
          </EmptyContainer>
        ) : (
          <UlListContainer>
            {notesList.map(eachitem => (
              <NoteItem notesList={eachitem} key={eachitem.id} />
            ))}
          </UlListContainer>
        )}
      </CardContainer>
    </BgContainer>
  )
}
export default Notes
