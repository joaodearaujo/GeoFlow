import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Search } from 'lucide-react';

type Props = {}

export default function SearchField(props: Props) {

  return (
    <InputGroup>
        <InputGroupInput placeholder="Buscar entregas..." />
        <InputGroupAddon>
            <SearchIcon />
        </InputGroupAddon>
    </InputGroup>
  )
}

function SearchIcon() {
    return  <Search size={48}  strokeWidth={2} />;
}