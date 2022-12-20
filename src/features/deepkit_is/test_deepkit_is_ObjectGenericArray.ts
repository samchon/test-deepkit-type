import { is } from "@deepkit/type";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectGenericArray = _test_deepkit_is(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => is<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);