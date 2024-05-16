import { Radio, Label } from 'flowbite-react';

// eslint-disable-next-line react/prop-types
export const RadioForm = ({ question, name, setRating, optionVal }) => {
    const setValues = () => {
        setRating(event.target.value);
    }
    return (
        <fieldset className="flex max-w-md flex-row gap-4 justify-start mb-8 text-lg" onChange={setValues} value={optionVal} >
            <legend className="mb-4">{ question }</legend>
            <div className="flex items-center gap-2">
                <Radio id="excellent" name={name} value="Excellent" />
                <Label htmlFor="excellent" className='text-md'>Excellent</Label>
            </div>
            <div className="flex items-center gap-2">
                <Radio id="good" name={name} value="Good" />
                <Label htmlFor="good" className='text-md'>Good</Label>
            </div>
            <div className="flex items-center gap-2">
                <Radio id="fair" name={name} value="Fair" />
                <Label htmlFor="fair" className='text-md'>Fair</Label>
            </div>
            <div className="flex items-center gap-2">
                <Radio id="bad" name={name} value="Bad" />
                <Label htmlFor="bad" className='text-md'>Bad</Label>
            </div>
            
        </fieldset>
    )
}