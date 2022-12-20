import { is } from "@deepkit/type";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectGeneric = _test_deepkit_is(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => is<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);