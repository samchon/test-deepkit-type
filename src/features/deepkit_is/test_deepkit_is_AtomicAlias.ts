import { is } from "@deepkit/type";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_AtomicAlias = _test_deepkit_is(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => is<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);