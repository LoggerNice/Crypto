import React, { useState } from 'react'

function Permutation() {
  const [messageValue, setmessageValue] = useState('')
  const [codeValue, setcodeValue] = useState('')

  const message = messageValue.replaceAll(' ','').split('')
  const wordCode = codeValue.split('')
  const countRow = Math.round(message.length / codeValue.length)

  var rows = []
  let row = ''

  //wordCode записывать побуквенно. Исправить
  message.map((word, idx) => {
    row += word
    if((idx + 1) % countRow === 0) {
      rows.push({word:wordCode, row:row})
      row = ''
    }
  })

  console.log(rows)

  return (
    <div className='px-16'>
      <div class="relative z-0 mb-6 w-full group">
          <input value={messageValue} onChange={e => setmessageValue(e.target.value)} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Введите сообщение</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
          <input value={codeValue} onChange={e => setcodeValue(e.target.value)} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Введите ключ</label>
      </div>
    </div>
  )
}

export default Permutation