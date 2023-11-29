import Select from 'react-select'

const SelectTag = ({ setTags }) => {
  const options = [
    { value: '#Technology', label: '#Technology' },
    { value: '#Science', label: '#Science' },
    { value: '#Business', label: '#Business' },
    { value: '#Health', label: '#Health' },
    { value: '#Environment', label: '#Environment' },
    { value: '#Sports', label: '#Sports' },
    { value: '#Covid19', label: '#Covid19' },
    { value: '#Education', label: '#Education' },
    { value: '#Innovation', label: '#Innovation' }

  ]

  const MyComponent = (data) => (
    setTags(data.value)
  )

  return <Select options={options} onChange={MyComponent} />
};

export default SelectTag;