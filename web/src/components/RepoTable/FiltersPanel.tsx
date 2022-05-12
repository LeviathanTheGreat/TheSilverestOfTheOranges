import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'
import FiltersButton from './FiltersButton'

interface Props {
    languageFilterOptions: string[]
    records: LanguageFilterable[]
    setRecords: Function
    className?: string
}

const FiltersPanel: FC<Props> = (props) => {
    const { languageFilterOptions, records, setRecords, className } = props

    const filterLanguage = (language: string | null, records: LanguageFilterable[], stateSetter: Function) => {
        if (language === "all") {
            stateSetter(records)
            return
        }

        const filtered = records.filter(record => record.language === language)
        stateSetter(filtered)
    }

    console.log("records: ", records)
    // 
    const [buttonPressedName, setButtonPressedName] = useState<string | null>(null)
    console.log("buttonPressedName: ", buttonPressedName)
    

    return (
        <div className={`w-full flex items-center ${className}`}>
            <h2 className=''>Filter By Language: </h2>
            <div className="w-1 h-full bg-gray-800"></div>
            <div className={`flex flex-wrap`} aria-label='table filters panel'>
                {languageFilterOptions.map(languageName => (
                    <FiltersButton
                        isPressed={buttonPressedName === languageName}
                        onClick={(e) => {
                            setButtonPressedName((oldValue: string | null) => {
                                // updates repos array with filtered results
                                if (oldValue === languageName)
                                    filterLanguage('all', records, setRecords)
                                else
                                    filterLanguage(languageName, records, setRecords)
                                // the part that actually does some state setting 
                                return oldValue !== languageName ? languageName : null
                            })

                        }} >
                        {languageName}
                    </FiltersButton>
                ))}
            </div>
        </div>
    )
}

export default FiltersPanel

interface LanguageFilterable extends Object {
    language: string
}