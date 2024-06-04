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

export default function DialogGuardian({
  onModalClose,
  onUpdate,
  initialData,
}: DialogDemo3Props) {
  const [nameGuardian, setNameGuardian] = useState('')
  const [emailGuardian, setEmailGuardian] = useState('')
  const [relationshipDegreeGuardian, setRelationshipDegreeGuardian] =
    useState('')
  const [streetGuardian, setStreetGuardian] = useState('')
  const [neighborhoodGuardian, setNeighborhoodGuardian] = useState('')
  const [zipcodeGuardian, setZipcodeGuardian] = useState('')
  const [stateGuardian, setStateGuardian] = useState('')
  const [complementGuardian, setComplementGuardian] = useState('')
  const [numberGuardian, setNumberGuardian] = useState('')
  const [phoneGuardian, setPhoneGuardian] = useState('')
  const [cityGuardian, setCityGuardian] = useState('')

  const handleDataUpdate = () => {
    onUpdate({
      nameGuardian,
      emailGuardian,
      relationshipDegreeGuardian,
      streetGuardian,
      neighborhoodGuardian,
      zipcodeGuardian,
      stateGuardian,
      complementGuardian,
      numberGuardian,
      phoneGuardian,
      cityGuardian,
    })
    onModalClose()
  }

  const handleOpen = () => {
    setNameGuardian(initialData.nameGuardian)
    setEmailGuardian(initialData.emailGuardian)
    setRelationshipDegreeGuardian(initialData.relationshipDegreeGuardian)
    setStreetGuardian(initialData.streetGuardian)
    setNeighborhoodGuardian(initialData.neighborhoodGuardian)
    setZipcodeGuardian(initialData.zipcodeGuardian)
    setStateGuardian(initialData.stateGuardian)
    setComplementGuardian(initialData.complementGuardian)
    setNameGuardian(initialData.numberGuardian)
    setPhoneGuardian(initialData.phoneGuardian)
    setCityGuardian(initialData.cityGuardian)
  }

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button onClick={handleOpen}>
            <Pencil />
          </button>
        </Dialog.Trigger>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow bg-black bg-opacity-50 fixed inset-0 grid place-items-center overflow-y-auto z-20" />
        <Dialog.Content className="overflow-y-scroll z-50 flex flex-col data-[state=open]:animate-contentShow p-8 fixed top-[50%] left-[50%] max-h-[850vh] w-[950vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#1E1E2D] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <Dialog.Title className="text-xl font-bold mb-6">
              Perfil do Responsável
            </Dialog.Title>
            <Dialog.Description className="text-md leading-6 pb-4">
              Faça as alterações do responsável aqui. Clique em salvar
              alterações quando finalizar.
            </Dialog.Description>
            <div>
              <p className="font-medium text-left">Dados Pessoais</p>
              <div className="p-2">
                <form className="space-y-4 bg-slate-800 h-48 justify-center align-middle p-8 rounded-lg border-slate-700 border-2 border-solid">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="nameGuardian"
                      >
                        Nome completo
                      </label>
                      <input
                        placeholder="Ex.: José da Silva"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={nameGuardian}
                        onChange={(e) => setNameGuardian(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="phoneGuardian"
                      >
                        Telefone
                      </label>
                      <input
                        placeholder="Ex.: (35) 91234-5678"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={phoneGuardian}
                        onChange={(e) => setPhoneGuardian(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="emailGuardian"
                      >
                        Email
                      </label>
                      <input
                        placeholder="Ex.: josedasilva@gmail.com"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={emailGuardian}
                        onChange={(e) => setEmailGuardian(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="relationshipDegreeGuardian"
                      >
                        Relacionamento
                      </label>
                      <Select defaultValue="selecione">
                        <SelectTrigger
                          aria-label="Status"
                          className="text-sm justify-between bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 h-9 "
                        />
                        <SelectContent>
                          <SelectItem value="selecione" disabled>
                            selecione
                          </SelectItem>
                          <SelectItem value="father">Pai</SelectItem>
                          <SelectItem value="mother">Mãe</SelectItem>
                          <SelectItem value="grandfather">Avô</SelectItem>
                          <SelectItem value="grandmother">Avó</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </div>
              <p className="font-medium text-left">Endereço</p>
              <div className="p-2">
                <form className="space-y-4 bg-slate-800 h-148 justify-center align-middle p-8 rounded-lg border-slate-700 border-2 border-solid">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="zipcodeGuardian"
                      >
                        CEP
                      </label>
                      <input
                        placeholder=" Ex.: 12345-000"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={zipcodeGuardian}
                        onChange={(e) => setZipcodeGuardian(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2 col-span-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="streetGuardian"
                      >
                        Rua
                      </label>
                      <input
                        placeholder="Ex.: Rua do Limoeiro-123"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={streetGuardian}
                        onChange={(e) => setStreetGuardian(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="numberGuardian"
                      >
                        Número
                      </label>
                      <input
                        placeholder=" Ex.: 123"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={numberGuardian}
                        onChange={(e) => setNumberGuardian(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="complementGuardian"
                      >
                        Complemento
                      </label>
                      <input
                        placeholder="Ex.: Sobrado"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={complementGuardian}
                        onChange={(e) => setComplementGuardian(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="neighborhoodGuardian"
                      >
                        Bairro
                      </label>
                      <input
                        placeholder="Ex.: Centro"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={neighborhoodGuardian}
                        onChange={(e) =>
                          setNeighborhoodGuardian(e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="cityGuardian"
                      >
                        Cidade
                      </label>
                      <input
                        placeholder="Ex.: Sobrado"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={cityGuardian}
                        onChange={(e) => setCityGuardian(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label
                        className="font-medium text-left"
                        htmlFor="stateGuardian"
                      >
                        Estado
                      </label>
                      <input
                        placeholder="Ex.: Minas Gerais"
                        className="bg-slate-900 rounded px-4 py-2 border-solid border-2 border-slate-700 "
                        value={stateGuardian}
                        onChange={(e) => setStateGuardian(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-between pt-4">
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
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
