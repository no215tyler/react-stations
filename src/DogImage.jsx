// @ts-check

export const DogImage = props => {
  return (
    <>
      <div className="image">
        <img src={props.imageUrl} />
      </div>
    </>
  )
}

export default DogImage
