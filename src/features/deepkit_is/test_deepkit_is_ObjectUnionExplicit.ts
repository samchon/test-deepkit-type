import { is } from "@deepkit/type";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectUnionExplicit = _test_deepkit_is(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => is<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);