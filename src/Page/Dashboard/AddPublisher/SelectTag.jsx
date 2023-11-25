import Select from 'react-select'

const SelectTag = ({setTags}) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      const MyComponent = (data) => (
        setTags(data.value)
        )
    
      return <Select options={options} onChange={MyComponent}/>
};

export default SelectTag;