import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'
import FiltersButton from './FiltersButton'

interface Props {
    languageFilterOptions: string[]
    records: LanguageFilterable[]
    setRecords: Dispatch<SetStateAction<any[]>>
    className?: string
}

const FiltersPanel: FC<Props> = (props) => {
    const { languageFilterOptions, records, setRecords, className } = props

    const filterLanguage = (language: string | null, records: LanguageFilterable[], stateSetter: Dispatch<SetStateAction<any[]>>) => {
        if (language === "all") {
            stateSetter(records)
            return
        }

        const filtered = records.filter(record => record.language === language)
        stateSetter(filtered)
    }


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
                            setButtonPressedName(buttonPressedName !== languageName ? languageName : null)
                            if (buttonPressedName === null)
                                filterLanguage('all', records, setRecords)
                            else
                                filterLanguage(buttonPressedName, records, setRecords)
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