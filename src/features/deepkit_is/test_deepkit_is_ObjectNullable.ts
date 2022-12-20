import { is } from "@deepkit/type";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectNullable = _test_deepkit_is(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => is<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);