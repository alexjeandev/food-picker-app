import { useState } from 'react'

function App() {

  const [food, setFood] = useState('')

  const [dish, setDish] = useState('')

  const [error, setError] = useState('')

  const dishes: Record<string, string[]> = {
    chinese: ['Lo Mein', 'Fried Rice', 'Orange chicken'],
    italian: ['Lasagna', 'Ravioli', 'Fettucini Alfredo'],
    jamaican: ['Jerk chicken', 'Curry chicken', 'Oxtail']
  }

  function testClick() {
    const key = food.trim().toLowerCase()

    if (!food.trim()) {
      setError('Please type a food category')
      setDish('')
      return
    }

    if (!dishes[key]) {
      setError('Food type not found')
      setDish('')
      return
    }

    const randomIndex = Math.floor(Math.random() * dishes[key].length)

    setDish(dishes[key][randomIndex])

    setError('')

    setFood('')
  }

  return (

    <div className='p-10 flex flex-col items-center justify-center min-h-screen bg-zinc-900'>

      <div className="bg-zinc-100 p-10 rounded-lg space-y-4 shadow">

        <h1 className='text-3xl font-bold'>Food Picker</h1>

        <p className='text-gray-600'>Pick a cuisine and get a random dish.</p>

        <div>
          <input
            type="text"
            placeholder='Type Chinese, Italian, or Jamaican'
            value={food}
            onChange={(e) => setFood(e.target.value)}

            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                testClick()
                }
              }}


            className='border border-zinc-400 p-4 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>

        <div>
          <button
            onClick={testClick}
            className='p-4 bg-indigo-500 text-white rounded-lg w-72 hover:bg-indigo-600'
          >
            Give me a dish
          </button>
        </div>

        <p className='text-xl font-bold text-center bg-zinc-100 p-1 rounded-lg shadow'>
          {dish}
        </p>

        {error && (
          <p className="text-red-500 font-semibold">
            {error}
          </p>
        )}

      </div>

    </div>
  )
}

export default App