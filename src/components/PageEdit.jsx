
export default function PageEdit() {
    const [editContent, setEditContent] = useState(false);
    const [text, setText] = useState("My text");
  return (
    <div>
        <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans"
             >Edit</p>
    </div>
  )
}
