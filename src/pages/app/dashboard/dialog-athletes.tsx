import { useState } from 'react'
// import Reactimport { Dialog } from "@radix-ui/react-dialog";
import * as Dialog from '@radix-ui/react-dialog'
import { Pencil } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

interface DialogDemo3Props {
  onModalClose: () => void
  onUpdate: (data: any) => void
  initialData?: any
}

export default function DialogAthletes({
  onModalClose,
  onUpdate,
  initialData,
}: DialogDemo3Props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [position, setPosition] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')

  const handleDataUpdate = () => {
    onUpdate({ name, age, gender, position, city, state, country })
    onModalClose()
  }

  const handleOpen = () => {
    setName(initialData.name)
    setAge(initialData.age)
    setGender(initialData.gender)
    setPosition(initialData.position)
    setCity(initialData.city)
    setState(initialData.state)
    setCountry(initialData.country)
  }

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button onClick={handleOpen}>
            <Pencil />
          </button>
        </Dialog.Trigger>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow bg-black bg-opacity-50 fixed inset-0 grid place-items-center overflow-y-auto" />
        <Dialog.Content className="overflow-y-scroll z-50 flex flex-col data-[state=open]:animate-contentShow p-8 fixed top-[50%] left-[50%] max-h-[850vh] w-[950vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#1E1E2D] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <Dialog.Title className="text-xl font-bold mb-6">
              Perfil do Atleta
            </Dialog.Title>
            <Dialog.Description className="text-md leading-6 pb-8">
              Faça as alterações do atleta aqui. Clique em salvar alterações
              quando finalizar.
            </Dialog.Description>
            <form className="space-y-4 bg-slate-800 h-86 justify-center align-middle p-8 rounded-lg border-slate-700 border-2 border-solid">
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-left" htmlFor="name">
                  Nome completo
                </label>
                <input
                  placeholder="Ex.: José da Silva"
                  className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-left" htmlFor="gender">
                    Sexo
                  </label>
                  <Select defaultValue="selecione">
                    <SelectTrigger
                      aria-label="Status"
                      className="text-sm justify-betweentext-sm justify-between bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 h-9 "
                    />
                    <SelectContent>
                      <SelectItem value="selecione" disabled>
                        selecione
                      </SelectItem>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="female">Feminino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-medium  text-left" htmlFor="age">
                    Idade
                  </label>
                  <input
                    placeholder="Ex.: 18 anos"
                    className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col space-y-2 col-span-2">
                  <label className="font-medium text-left" htmlFor="city">
                    Cidade
                  </label>
                  <input
                    placeholder="Ex.: Itajubá"
                    className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-left" htmlFor="state">
                    Estado
                  </label>
                  <input
                    placeholder="Ex.: Acre"
                    className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-left" htmlFor="country">
                    País
                  </label>
                  <input
                    placeholder="Ex.: Brasil"
                    className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-medium text-left" htmlFor="position">
                  Posição
                </label>
                <input
                  placeholder="Ex.: Pivô"
                  className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex justify-between pt-6">
            <Dialog.Close asChild>
              <button
                onClick={onModalClose}
                className="bg-lime-500 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Cancelar
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                onClick={handleDataUpdate}
                className="bg-lime-500 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                Salvar alterações
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
