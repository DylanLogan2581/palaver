import Character from './Character.tsx'

export default function CharactersList() {
    const characters = [
        {name: "John"},
        {name: "Ted"}
    ]

    return (
        <>
            {characters.map((character, id) => <Character key={id} name={character.name}></Character>)}
        </>
    )
}