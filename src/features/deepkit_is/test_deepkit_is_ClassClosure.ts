import { is } from "@deepkit/type";

import { ClassClosure } from "../../structures/ClassClosure";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ClassClosure = _test_deepkit_is(
    "ClassClosure",
    ClassClosure.generate,
    (input) => is<ClassClosure>(input),
    ClassClosure.SPOILERS,
);