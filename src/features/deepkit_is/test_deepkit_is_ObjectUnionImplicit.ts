import { is } from "@deepkit/type";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectUnionImplicit = _test_deepkit_is(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => is<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);