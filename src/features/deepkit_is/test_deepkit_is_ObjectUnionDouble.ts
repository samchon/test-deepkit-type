import { is } from "@deepkit/type";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectUnionDouble = _test_deepkit_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => is<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);