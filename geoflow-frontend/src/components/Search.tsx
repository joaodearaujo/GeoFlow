import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Search } from 'lucide-react';

export default function SearchField() {

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