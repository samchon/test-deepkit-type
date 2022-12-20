import { is } from "@deepkit/type";

import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectClosure = _test_deepkit_is(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => is<ObjectClosure>(input),
    ObjectClosure.SPOILERS,
);