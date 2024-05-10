import Modal from "@/components/modal"
import { useEditorStore } from "@/utils/stores"
import { randomInt } from "crypto"

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  onDone: () => void
}

const AiModal = (props: Props) => {
  const atsScore = useEditorStore((state) => state.atsScore)
  const suggestions = useEditorStore((state) => state.suggestions)
  const feedback = useEditorStore((state) => state.feedback)

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} title={props.title} type={"success"} onDone={props.onDone}>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">ATS score</h2>
        <h1 className="text-5xl">{atsScore <= 60 ? atsScore - 20 : atsScore}/100</h1>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <h2 className="text-3xl font-bold">Feedback</h2>
        <ol>
          {feedback.map((feed, index) => (
            <li key={index}>{feed}</li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <h2 className="text-3xl font-bold">Suggestions</h2>
        <ol>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ol>
      </div>
    </Modal>
  )
}

export default AiModal